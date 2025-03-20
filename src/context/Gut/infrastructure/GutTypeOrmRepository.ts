import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ProjectId } from '../../Projects/domain';
import { ProjectEntity } from '../../Projects/infrastructure';
import { Nullable } from '../../Shared/domain/Nullable';
import { Status } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';
import { Gut, GutId, GutRepository } from '../domain';
import { GutEntity } from './GutEntity';

@Injectable()
export class GutTypeOrmRepository implements GutRepository {
  constructor(
    @InjectRepository(GutEntity)
    private readonly gutEntityRepository: Repository<GutEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>
  ) {}

  async insert(gut: Gut): Promise<Gut> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: gut.projectId.value,
    });
    const gutEntity = this.toEntity(gut, projectEntity);

    await this.gutEntityRepository.insert(gutEntity);

    return gut;
  }

  async findById(id: GutId): Promise<Nullable<Gut>> {
    const gutFound = await this.gutEntityRepository.findOneBy({
      id: id.value,
    });

    return (
      gutFound &&
      Gut.fromPrimitives({ ...gutFound, projectId: gutFound.project.id })
    );
  }

  async update(gut: Gut): Promise<boolean> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: gut.projectId.value,
    });
    const gutEntity = this.toEntity(gut, projectEntity);
    delete gutEntity.project.name;
    const updateResult: UpdateResult = await this.gutEntityRepository.update(
      { id: gutEntity.id },
      gutEntity
    );
    return Boolean(updateResult.affected);
  }

  async findByParam(param: ProjectId): Promise<Gut> {
    const gutFound = await this.gutEntityRepository.findOne({
      where: { project: { id: param.value } },
      relations: [],
    });

    return (
      gutFound &&
      Gut.fromPrimitives({ ...gutFound, projectId: gutFound.project.id })
    );
  }

  private toEntity(gut: Gut, project: ProjectEntity): GutEntity {
    const entity = new GutEntity();

    entity.id = gut.id.value;
    entity.project = project;
    entity.observations = gut.observations.value;
    entity.status = gut.status.value as Status;

    return entity;
  }
}
