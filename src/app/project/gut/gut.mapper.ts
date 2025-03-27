import { Gut, GutPrimitiveType } from '../../../context/Gut';
import { UpdateGutDto, UpdateGutFullDto } from './dto/update-gut-dto';

export class GutMapper {
  static toPrimitives(gut: Gut): GutPrimitiveType {
    return {
      id: gut.id.value,
      projectId: gut.projectId.value,
      status: gut.status.value,
      observations: gut.observations.value,
    };
  }

  static toFullGutDto(gutWithOutId: UpdateGutDto): UpdateGutFullDto {
    const fullGut: UpdateGutFullDto = {
      id: gutWithOutId.id,
      observations: gutWithOutId.observations,
      status: gutWithOutId.status,
    };
    return fullGut;
  }
}
