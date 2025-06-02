import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutDoctor_institutsInput } from "../inputs/DoctorsUpdateWithoutDoctor_institutsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutDoctor_institutsInput", {})
export class DoctorsUpdateToOneWithWhereWithoutDoctor_institutsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutDoctor_institutsInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutDoctor_institutsInput;
}
