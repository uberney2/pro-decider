import {
  Controller,
  Post,
  Put,
  Param,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Query,
  DefaultValuePipe,
  ParseBoolPipe,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DomainExceptions, Project } from '../../context/Projects';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreatePlanDto } from './plan/dto/create-plan-dto';
import {
  PlanCreator,
  PlanFinder,
} from '../../context/Plans';
import { exceptions as PlanExceptions } from '../../context/Plans';
import { CreateTeamDto } from './team/dto/create-team-dto';
import { UpdateTeamDto } from './team/dto/update-team-dto';
import {
  TeamCreator,
  TeamFinder,
  TeamUpdater,
} from '../../context/Teams';
import { PlanUpdater } from '../../context/Plans';
import { exceptions as TeamExceptions } from '../../context/Teams';
import { exceptions as ProcessExceptions } from '../../context/Processes';
import { exceptions as GutExceptions } from '../../context/Gut';
import { exceptions as QAExceptions } from '../../context/QA';
import { exceptions as ProjectExceptions } from '../../context/Projects';
import {
  ProjectCreator,
  ProjectFInderByAccountId,
  ProjectFinderAll,
  ProjectFinderByParam,
  ProjectUpdater,
} from '../../context/Projects';
import { UpdateProjectDto } from './dto/update-project.dto';
import {
  ProcessCreator,
  ProcessUpdater,
  ProcessFinder,
} from '../../context/Processes';
import { CreateProcessDto } from './process/dto/create-process-dto';
import {
  QACreator,
  QAUpdater,
  QAFinder,
} from '../../context/QA';
import { CreateQADto } from './qa/dto/create-qa-dto';
import { CreateGutDto } from './gut/dto/create-gut-dto';
import {
  GutCreator,
  GutUpdater,
  GutFinder,
} from '../../context/Gut';
import { ProjectsResponse } from './dto/project-response.dto';
import { UpdatePlanDto } from './plan/dto/update-plan-dto';
import { UpdateProcessDto } from './process/dto/update-process-dto';
import { UpdateQADto } from './qa/dto/update-qa-dto';
import { UpdateGutDto } from './gut/dto/update-gut-dto';
import { PlanMapper } from './plan/plan.mapper';
import { TeamMapper } from './team/team.mapper';
import { ProcessMapper } from './process/process.mapper';
import { QAMapper } from './qa/qa.mapper';
import { GutMapper } from './gut/gut.mapper';
import {
  TeamExists,
  TeamFound,
  TeamNotFound,
  TeamUpdatedOk,
} from './team/swagger/responses';
import {
  GutExists,
  GutFound,
  GutNotFound,
  GutUpdatedOk,
} from './gut/swagger/responses';
import {
  PlanExists,
  PlanFound,
  PlanNotFound,
  PlanUpdatedOk,
} from './plan/swagger/responses';
import {
  ProcessExists,
  ProcessFound,
  ProcessNotFound,
  ProcessUpdatedOk,
} from './process/swagger/responses';
import {
  QAExists,
  QAFound,
  QANotFound,
  QAUpdatedOk,
} from './qa/swagger/responses';
import {
  ProjectFound,
  ProjectNotFound,
  ProjectsFound,
} from './swagger/responses';
import { ProjectMapper } from './project.mapper';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(
    private projectCreator: ProjectCreator,
    private planCreator: PlanCreator,
    private processCreator: ProcessCreator,
    private gutCreator: GutCreator,
    private qaCreator: QACreator,
    private teamCreator: TeamCreator,
    private projectUpdater: ProjectUpdater,
    private projectFinderByParam: ProjectFinderByParam,
    private projectFinderAll: ProjectFinderAll,
    private teamFinder: TeamFinder,
    private teamUpdater: TeamUpdater,
    private planUpdater: PlanUpdater,
    private processUpdater: ProcessUpdater,
    private qaUpdater: QAUpdater,
    private gutUpdater: GutUpdater,
    private planFinder: PlanFinder,
    private processFinder: ProcessFinder,
    private qaFinder: QAFinder,
    private gutFinder: GutFinder,
    private projectFinderAllByAccountId: ProjectFInderByAccountId
  ) {}

  @Post()
  async create(@Body() project: CreateProjectDto) {
    try {
      await this.projectCreator.run(project);
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectErrorDate) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (error instanceof DomainExceptions.ProjectAlreadyExist) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }
      throw error;
    }
  }

  @Post(':projectId/plan')
  @ApiNotFoundResponse(ProjectNotFound)
  @ApiForbiddenResponse(PlanExists)
  async createPlan(
    @Param('projectId') projectId: string,
    @Body() plan: CreatePlanDto
  ) {
    try {
      await this.planCreator.run({ projectId, ...plan });
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      if (error instanceof PlanExceptions.PlanAlreadyExist) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }
      throw error;
    }
  }

  @Post(':projectId/team')
  @ApiNotFoundResponse(ProjectNotFound)
  @ApiForbiddenResponse(TeamExists)
  async createTeam(
    @Param('projectId') projectId: string,
    @Body() team: CreateTeamDto
  ) {
    try {
      await this.teamCreator.run({ projectId, ...team });
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      if (error instanceof TeamExceptions.TeamAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }

      throw error;
    }
  }

  @Post(':projectId/process')
  @ApiNotFoundResponse(ProjectNotFound)
  @ApiForbiddenResponse(ProcessExists)
  async createProcess(
    @Param('projectId') projectId: string,
    @Body() process: CreateProcessDto
  ) {
    try {
      await this.processCreator.run({ projectId, ...process });
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      if (error instanceof ProcessExceptions.ProcessAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }

      throw error;
    }
  }

  @Post(':projectId/qa')
  @ApiNotFoundResponse(ProjectNotFound)
  @ApiForbiddenResponse(QAExists)
  async createQA(
    @Param('projectId') projectId: string,
    @Body() qaDto: CreateQADto
  ) {
    try {
      await this.qaCreator.run({ projectId, ...qaDto });
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      if (error instanceof QAExceptions.QAAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }

      throw error;
    }
  }

  @Post(':projectId/gut')
  @ApiNotFoundResponse(ProjectNotFound)
  @ApiForbiddenResponse(GutExists)
  async createGut(
    @Param('projectId') projectId: string,
    @Body() gutDto: CreateGutDto
  ) {
    try {
      await this.gutCreator.run({ projectId, ...gutDto });
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      if (error instanceof GutExceptions.GutAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }

      throw error;
    }
  }


  @Put(':projectId')
  async update(
    @Param('projectId') projectId: string,
    @Body() updateProjectDto: UpdateProjectDto
  ) {
    try {
      updateProjectDto.id = projectId;
      const fullProject =
        ProjectMapper.projectDtoToFullProjectDto(updateProjectDto);
      const response = await this.projectUpdater.run(fullProject);
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectNotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }

  @Get(':param')
  @ApiNotFoundResponse(ProjectNotFound)
  @ApiOkResponse(ProjectFound)
  async findByParam(@Param('param') param: string) {
    try {
      const project = await this.projectFinderByParam.run(param);
      return project.toPrimitives();
    } catch (error) {
      if (error instanceof DomainExceptions.ProjectNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @ApiOkResponse(ProjectsFound)
  @Get()
  async findAll(
    @Query(
      'includeDimensions',
      new DefaultValuePipe(false),
      new ParseBoolPipe()
    )
    includeDimensions,
    @Query('isExecution', new DefaultValuePipe(false), new ParseBoolPipe())
    isExecution: boolean
  ): Promise<ProjectsResponse[]> {
    const response = await this.projectFinderAll.run(
      includeDimensions,
      isExecution
    );
    return response.map(this.createAllProjectsResponse.bind(this));
  }

  @ApiOkResponse(ProjectsFound)
  @Get('/account/:idAccount')
  async findProjectsByAccountId(
    @Param('idAccount') idAccount: string
  ): Promise<ProjectsResponse[]> {
    const response = await this.projectFinderAllByAccountId.run(idAccount);
    return response.map(this.createAllProjectsResponse.bind(this));
  }

  private createAllProjectsResponse(projectObject: Project): ProjectsResponse {
    const newProject: ProjectsResponse = {
      id: projectObject.id.value,
      account: ProjectMapper.accountObjectToCreateAccountDto(
        projectObject.account
      ),
      name: projectObject.name.value,
      averageBillingRate: projectObject.averageBillingRate.value,
      fullTimeEmployees: projectObject.fullTimeEmployees.value,
      totalHours: projectObject.totalHours.value,
      closingProbability: projectObject.closingProbability.value,
      latamRevenue: projectObject.latamRevenue.value,
      latamParticipationPercentage:
        projectObject.latamParticipationPercentage.value,
      activeEmployees: projectObject.activeEmployees.value,
      gmPercentage: projectObject.gmPercentage.value,
      totalSOW: projectObject.totalSOW.value,
      contractType: projectObject.contractType.value,
      usaPointOfContact: projectObject.usaPointOfContact.value,
      pursuitStartDate: projectObject.pursuitStartDate.value,
      pursuitEndDate: projectObject.pursuitEndDate.value,
      statusChangeDate: projectObject.statusChangeDate.value,
      responsibleFromLatam: projectObject.responsibleFromLatam.map(
        (responsible) => responsible.value
      ),
      status: projectObject.status.value,
      additionalBackground: projectObject.additionalBackground.value,
      onboardingProcess: projectObject.onboardingProcess.value,
      servicesScope: projectObject.servicesScope.value,
      levelOfAccount: projectObject.levelOfAccount.value,
      plan:
        projectObject.plan !== null
          ? PlanMapper.toPrimitives(projectObject.plan)
          : null,
      team:
        projectObject.team !== null
          ? TeamMapper.toPrimitives(projectObject.team)
          : null,
      process:
        projectObject.process !== null
          ? ProcessMapper.toPrimitives(projectObject.process)
          : null,
      qa:
        projectObject.qa !== null
          ? QAMapper.toPrimitives(projectObject.qa)
          : null,
      gut:
        projectObject.gut !== null
          ? GutMapper.toPrimitives(projectObject.gut)
          : null,
    };
    return newProject;
  }

  @Get(':projectId/team')
  @ApiNotFoundResponse(TeamNotFound)
  @ApiOkResponse(TeamFound)
  async findTeamByProjectId(@Param('projectId') projectId: string) {
    try {
      const team = await this.teamFinder.run(projectId);
      return TeamMapper.toPrimitives(team);
    } catch (error) {
      if (
        error instanceof DomainExceptions.ProjectNotFound ||
        error instanceof TeamExceptions.TeamNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Get(':projectId/plan')
  @ApiNotFoundResponse(PlanNotFound)
  @ApiOkResponse(PlanFound)
  async findPlanByProjectId(@Param('projectId') projectId: string) {
    try {
      const plan = await this.planFinder.run(projectId);
      return PlanMapper.toPrimitives(plan);
    } catch (error) {
      if (
        error instanceof DomainExceptions.ProjectNotFound ||
        error instanceof PlanExceptions.PlanNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Get(':projectId/process')
  @ApiNotFoundResponse(ProcessNotFound)
  @ApiOkResponse(ProcessFound)
  async findProcessByProjectId(@Param('projectId') projectId: string) {
    try {
      const process = await this.processFinder.run(projectId);
      return ProcessMapper.toPrimitives(process);
    } catch (error) {
      if (
        error instanceof DomainExceptions.ProjectNotFound ||
        error instanceof ProcessExceptions.ProcessNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Get(':projectId/qa')
  @ApiNotFoundResponse(QANotFound)
  @ApiOkResponse(QAFound)
  async findQAByProjectId(@Param('projectId') projectId: string) {
    try {
      const qa = await this.qaFinder.run(projectId);
      return QAMapper.toPrimitives(qa);
    } catch (error) {
      if (
        error instanceof DomainExceptions.ProjectNotFound ||
        error instanceof QAExceptions.QANotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Get(':projectId/gut')
  @ApiNotFoundResponse(GutNotFound)
  @ApiOkResponse(GutFound)
  async findGutByProjectId(@Param('projectId') projectId: string) {
    try {
      const gut = await this.gutFinder.run(projectId);
      return GutMapper.toPrimitives(gut);
    } catch (error) {
      if (
        error instanceof GutExceptions.GutNotFound ||
        error instanceof DomainExceptions.ProjectNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Put(':projectId/team/:teamId')
  @ApiNotFoundResponse(TeamNotFound)
  @ApiOkResponse(TeamUpdatedOk)
  async updateTeam(
    @Param('projectId') projectId: string,
    @Param('teamId') teamId: string,
    @Body() updateTeamDto: UpdateTeamDto
  ) {
    try {
      updateTeamDto.id = teamId;
      const fullTeam = TeamMapper.toFullTeamDto(updateTeamDto);
      const response = await this.teamUpdater.run({
        projectId,
        id: teamId,
        ...fullTeam,
      });
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof TeamExceptions.TeamNotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (
        error instanceof TeamExceptions.TeamNotFound ||
        error instanceof ProjectExceptions.ProjectNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Put(':projectId/plan/:planId')
  @ApiNotFoundResponse(PlanNotFound)
  @ApiOkResponse(PlanUpdatedOk)
  async updatePlan(
    @Param('projectId') projectId: string,
    @Param('planId') planId: string,
    @Body() updatePlanDto: UpdatePlanDto
  ) {
    try {
      updatePlanDto.id = planId;
      const fullPlan = PlanMapper.toFullPlanDto(updatePlanDto);
      const response = await this.planUpdater.run({
        projectId,
        id: planId,
        ...fullPlan,
      });
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof PlanExceptions.PlanNotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (
        error instanceof PlanExceptions.PlanNotFound ||
        error instanceof ProjectExceptions.ProjectNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Put(':projectId/process/:processId')
  @ApiNotFoundResponse(ProcessNotFound)
  @ApiOkResponse(ProcessUpdatedOk)
  async updateProcess(
    @Param('projectId') projectId: string,
    @Param('processId') processId: string,
    @Body() updateProcessDto: UpdateProcessDto
  ) {
    try {
      updateProcessDto.id = processId;
      const fullProcess = ProcessMapper.toFullProcessDto(updateProcessDto);
      const response = await this.processUpdater.run({
        projectId,
        id: processId,
        ...fullProcess,
      });
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof ProcessExceptions.ProcessNotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (
        error instanceof ProcessExceptions.ProcessNotFound ||
        error instanceof ProjectExceptions.ProjectNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Put(':projectId/qa/:qaId')
  @ApiNotFoundResponse(QANotFound)
  @ApiOkResponse(QAUpdatedOk)
  async updateQA(
    @Param('projectId') projectId: string,
    @Param('qaId') qaId: string,
    @Body() updateQADto: UpdateQADto
  ) {
    try {
      updateQADto.id = qaId;
      const fullQa = QAMapper.toFullQADto(updateQADto);
      const response = await this.qaUpdater.run({
        projectId,
        id: qaId,
        ...fullQa,
      });
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof QAExceptions.QANotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (
        error instanceof QAExceptions.QANotFound ||
        error instanceof ProjectExceptions.ProjectNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Put(':projectId/gut/:gutId')
  @ApiNotFoundResponse(GutNotFound)
  @ApiOkResponse(GutUpdatedOk)
  async updateGut(
    @Param('projectId') projectId: string,
    @Param('gutId') gutId: string,
    @Body() updateGutDto: UpdateGutDto
  ) {
    try {
      updateGutDto.id = gutId;
      const fullQa = GutMapper.toFullGutDto(updateGutDto);
      const response = await this.gutUpdater.run({
        projectId,
        id: gutId,
        ...fullQa,
      });
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof GutExceptions.GutNotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      if (
        error instanceof GutExceptions.GutNotFound ||
        error instanceof ProjectExceptions.ProjectNotFound
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }
}
