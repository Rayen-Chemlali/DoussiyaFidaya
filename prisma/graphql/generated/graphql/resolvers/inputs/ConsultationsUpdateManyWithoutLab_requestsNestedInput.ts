import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutLab_requestsInput } from "../inputs/ConsultationsCreateOrConnectWithoutLab_requestsInput";
import { ConsultationsCreateWithoutLab_requestsInput } from "../inputs/ConsultationsCreateWithoutLab_requestsInput";
import { ConsultationsScalarWhereInput } from "../inputs/ConsultationsScalarWhereInput";
import { ConsultationsUpdateManyWithWhereWithoutLab_requestsInput } from "../inputs/ConsultationsUpdateManyWithWhereWithoutLab_requestsInput";
import { ConsultationsUpdateWithWhereUniqueWithoutLab_requestsInput } from "../inputs/ConsultationsUpdateWithWhereUniqueWithoutLab_requestsInput";
import { ConsultationsUpsertWithWhereUniqueWithoutLab_requestsInput } from "../inputs/ConsultationsUpsertWithWhereUniqueWithoutLab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateManyWithoutLab_requestsNestedInput", {})
export class ConsultationsUpdateManyWithoutLab_requestsNestedInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutLab_requestsInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutLab_requestsInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpsertWithWhereUniqueWithoutLab_requestsInput], {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithWhereUniqueWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  set?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  delete?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpdateWithWhereUniqueWithoutLab_requestsInput], {
    nullable: true
  })
  update?: ConsultationsUpdateWithWhereUniqueWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsUpdateManyWithWhereWithoutLab_requestsInput], {
    nullable: true
  })
  updateMany?: ConsultationsUpdateManyWithWhereWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsultationsScalarWhereInput[] | undefined;
}
