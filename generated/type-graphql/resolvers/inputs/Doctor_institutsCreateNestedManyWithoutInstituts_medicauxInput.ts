import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctor_institutsCreateManyInstituts_medicauxInputEnvelope } from "../inputs/Doctor_institutsCreateManyInstituts_medicauxInputEnvelope";
import { Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput";
import { Doctor_institutsCreateWithoutInstituts_medicauxInput } from "../inputs/Doctor_institutsCreateWithoutInstituts_medicauxInput";
import { Doctor_institutsWhereUniqueInput } from "../inputs/Doctor_institutsWhereUniqueInput";

@TypeGraphQL.InputType("Doctor_institutsCreateNestedManyWithoutInstituts_medicauxInput", {})
export class Doctor_institutsCreateNestedManyWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => [Doctor_institutsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: Doctor_institutsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: Doctor_institutsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => Doctor_institutsCreateManyInstituts_medicauxInputEnvelope, {
    nullable: true
  })
  createMany?: Doctor_institutsCreateManyInstituts_medicauxInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Doctor_institutsWhereUniqueInput], {
    nullable: true
  })
  connect?: Doctor_institutsWhereUniqueInput[] | undefined;
}
