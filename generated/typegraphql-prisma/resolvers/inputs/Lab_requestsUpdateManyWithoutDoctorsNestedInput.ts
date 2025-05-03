import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateManyDoctorsInputEnvelope } from "../inputs/Lab_requestsCreateManyDoctorsInputEnvelope";
import { Lab_requestsCreateOrConnectWithoutDoctorsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutDoctorsInput";
import { Lab_requestsCreateWithoutDoctorsInput } from "../inputs/Lab_requestsCreateWithoutDoctorsInput";
import { Lab_requestsScalarWhereInput } from "../inputs/Lab_requestsScalarWhereInput";
import { Lab_requestsUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/Lab_requestsUpdateManyWithWhereWithoutDoctorsInput";
import { Lab_requestsUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/Lab_requestsUpdateWithWhereUniqueWithoutDoctorsInput";
import { Lab_requestsUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/Lab_requestsUpsertWithWhereUniqueWithoutDoctorsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpdateManyWithoutDoctorsNestedInput", {})
export class Lab_requestsUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: Lab_requestsUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_requestsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  set?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  delete?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: Lab_requestsUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: Lab_requestsUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_requestsScalarWhereInput[] | undefined;
}
