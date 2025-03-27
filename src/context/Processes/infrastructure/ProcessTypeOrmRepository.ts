import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ProjectId } from '../../Projects/domain';
import { ProjectEntity } from '../../Projects/infrastructure';
import { Nullable } from '../../Shared/domain/Nullable';
import { Status } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';
import {
  AccountabilityLevelEnum,
  Process,
  ProcessId,
  ProcessRepository,
} from '../domain';
import { ProcessEntity } from './ProcessEntity';

@Injectable()
export class ProcessTypeOrmRepository implements ProcessRepository {
  constructor(
    @InjectRepository(ProcessEntity)
    private readonly processEntityRepository: Repository<ProcessEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>
  ) {}

  async insert(process: Process): Promise<Process> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: process.projectId.value,
    });
    const processEntity = this.toEntity(process, projectEntity);

    await this.processEntityRepository.insert(processEntity);

    return process;
  }

  async findById(id: ProcessId): Promise<Nullable<Process>> {
    const processFound = await this.processEntityRepository.findOneBy({
      id: id.value,
    });

    return (
      processFound &&
      Process.fromPrimitives({
        ...processFound,
        projectId: processFound.project.id,
      })
    );
  }

  async update(process: Process): Promise<boolean> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: process.projectId.value,
    });
    const processEntity = this.toEntity(process, projectEntity);
    delete processEntity.project.name;
    const updateResult: UpdateResult =
      await this.processEntityRepository.update(
        { id: processEntity.id },
        processEntity
      );
    return Boolean(updateResult.affected);
  }

  async findByParam(param: ProjectId): Promise<Process> {
    const processFound = await this.processEntityRepository.findOne({
      where: { project: { id: param.value } },
      relations: [],
    });

    return (
      processFound &&
      Process.fromPrimitives({
        ...processFound,
        projectId: processFound.project.id,
      })
    );
  }

  private toEntity(process: Process, project: ProjectEntity): ProcessEntity {
    const entity = new ProcessEntity();

    entity.id = process.id.value;
    entity.project = project;
    entity.stack = process.stack.value;
    entity.methodology = process.methodology.value;
    entity.frequencyToDeploy = process.frequencyToDeploy.value;
    entity.latamInfluence = process.latamInfluence.value;
    entity.accountabilityLevel = process.accountabilityLevel
      .value as AccountabilityLevelEnum;
    entity.observations = process.observations.value;
    entity.status = process.status.value as Status;

    return entity;
  }
}
