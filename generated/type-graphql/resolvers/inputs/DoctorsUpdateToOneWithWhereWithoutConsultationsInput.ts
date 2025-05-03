import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutConsultationsInput } from "../inputs/DoctorsUpdateWithoutConsultationsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutConsultationsInput", {})
export class DoctorsUpdateToOneWithWhereWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutConsultationsInput;
}
