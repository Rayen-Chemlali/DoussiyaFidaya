import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutDoctor_institutsInput } from "../inputs/DoctorsCreateWithoutDoctor_institutsInput";
import { DoctorsUpdateWithoutDoctor_institutsInput } from "../inputs/DoctorsUpdateWithoutDoctor_institutsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutDoctor_institutsInput", {})
export class DoctorsUpsertWithoutDoctor_institutsInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutDoctor_institutsInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutDoctor_institutsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutDoctor_institutsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutDoctor_institutsInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
