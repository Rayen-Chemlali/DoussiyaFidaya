import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateOrConnectWithoutConsultationsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutConsultationsInput";
import { Lab_requestsCreateWithoutConsultationsInput } from "../inputs/Lab_requestsCreateWithoutConsultationsInput";
import { Lab_requestsScalarWhereInput } from "../inputs/Lab_requestsScalarWhereInput";
import { Lab_requestsUpdateManyWithWhereWithoutConsultationsInput } from "../inputs/Lab_requestsUpdateManyWithWhereWithoutConsultationsInput";
import { Lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput } from "../inputs/Lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput";
import { Lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput } from "../inputs/Lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpdateManyWithoutConsultationsNestedInput", {})
export class Lab_requestsUpdateManyWithoutConsultationsNestedInput {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateWithoutConsultationsInput], {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsCreateOrConnectWithoutConsultationsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput], {
    nullable: true
  })
  upsert?: Lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [Lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput], {
    nullable: true
  })
  update?: Lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpdateManyWithWhereWithoutConsultationsInput], {
    nullable: true
  })
  updateMany?: Lab_requestsUpdateManyWithWhereWithoutConsultationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_requestsScalarWhereInput[] | undefined;
}
