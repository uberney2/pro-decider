import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ProjectId } from '../../Projects/domain';
import { ProjectEntity } from '../../Projects/infrastructure';
import { Nullable } from '../../Shared/domain/Nullable';
import { Status } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';
import { QA, QAId, QARepository } from '../domain';
import { QaEntity } from './QAEntity';

@Injectable()
export class QATypeOrmRepository implements QARepository {
  constructor(
    @InjectRepository(QaEntity)
    private readonly qaEntityRepository: Repository<QaEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>
  ) {}

  async insert(qa: QA): Promise<QA> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: qa.projectId.value,
    });
    const qaEntity = this.toEntity(qa, projectEntity);

    await this.qaEntityRepository.insert(qaEntity);

    return qa;
  }

  async findById(id: QAId): Promise<Nullable<QA>> {
    const qaFound = await this.qaEntityRepository.findOneBy({
      id: id.value,
    });

    return (
      qaFound &&
      QA.fromPrimitives({ ...qaFound, projectId: qaFound.project.id })
    );
  }

  async update(qa: QA): Promise<boolean> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: qa.projectId.value,
    });
    const qaEntity = this.toEntity(qa, projectEntity);
    delete qaEntity.project.name;
    const updateResult: UpdateResult = await this.qaEntityRepository.update(
      { id: qaEntity.id },
      qaEntity
    );
    return Boolean(updateResult.affected);
  }

  async findByParam(param: ProjectId): Promise<QA> {
    const qaFound = await this.qaEntityRepository.findOne({
      where: { project: { id: param.value } },
      relations: [],
    });

    return (
      qaFound &&
      QA.fromPrimitives({ ...qaFound, projectId: qaFound.project.id })
    );
  }

  private toEntity(qa: QA, project: ProjectEntity): QaEntity {
    const entity = new QaEntity();

    entity.id = qa.id.value;
    entity.project = project;
    entity.currentStatus = qa.currentStatus.value;
    entity.testTools = qa.testTools.value;
    entity.automationLevel = qa.automationLevel.value;
    entity.manualProcess = qa.manualProcess.value;
    entity.automatedProcess = qa.automatedProcess.value;
    entity.observations = qa.observations.value;
    entity.status = qa.status.value as Status;

    return entity;
  }
}
