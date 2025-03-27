import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '../../Projects/infrastructure';
import { PlanEntity } from './PlanEntity';
import { Repository, UpdateResult } from 'typeorm';
import { Plan } from '../domain/Plan';
import { PlanId, PlanRepository } from '../domain';
import { Status } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';
import { Nullable } from '../../Shared/domain/Nullable';
import { ProjectId } from '../../Projects/domain';

@Injectable()
export class PlanTypeOrmRepository implements PlanRepository {
  constructor(
    @InjectRepository(PlanEntity)
    private readonly planEntityRepository: Repository<PlanEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>
  ) {}

  async insert(plan: Plan): Promise<Plan> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: plan.projectId.value,
    });
    const planEntity = this.toEntity(plan, projectEntity);

    await this.planEntityRepository.insert(planEntity);

    return plan;
  }

  async findById(id: PlanId): Promise<Nullable<Plan>> {
    const planFound = await this.planEntityRepository.findOneBy({
      id: id.value,
    });

    return (
      planFound &&
      Plan.fromPrimitives({ ...planFound, projectId: planFound.project.id })
    );
  }

  async update(plan: Plan): Promise<boolean> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: plan.projectId.value,
    });
    const planEntity = this.toEntity(plan, projectEntity);
    delete planEntity.project.name;
    const updateResult: UpdateResult = await this.planEntityRepository.update(
      { id: planEntity.id },
      planEntity
    );
    return Boolean(updateResult.affected);
  }

  async findByParam(param: ProjectId): Promise<Plan> {
    const planFound = await this.planEntityRepository.findOne({
      where: { project: { id: param.value } },
      relations: [],
    });

    return (
      planFound &&
      Plan.fromPrimitives({ ...planFound, projectId: planFound.project.id })
    );
  }

  private toEntity(plan: Plan, project: ProjectEntity): PlanEntity {
    const entity = new PlanEntity();

    entity.id = plan.id.value;
    entity.project = project;
    entity.backlogResponsible = plan.backlogResponsible.value;
    entity.deliverables = plan.deliverables.value;
    entity.observations = plan.observations.value;
    entity.roadMap = plan.roadMap.value;
    entity.status = plan.status.value as Status;

    return entity;
  }
}
