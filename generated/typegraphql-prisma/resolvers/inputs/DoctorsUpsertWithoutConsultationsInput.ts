import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutConsultationsInput } from "../inputs/DoctorsCreateWithoutConsultationsInput";
import { DoctorsUpdateWithoutConsultationsInput } from "../inputs/DoctorsUpdateWithoutConsultationsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutConsultationsInput", {})
export class DoctorsUpsertWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
