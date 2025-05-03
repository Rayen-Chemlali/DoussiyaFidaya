import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutLab_requestsInput } from "../inputs/DoctorsCreateOrConnectWithoutLab_requestsInput";
import { DoctorsCreateWithoutLab_requestsInput } from "../inputs/DoctorsCreateWithoutLab_requestsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutLab_requestsInput", {})
export class DoctorsCreateNestedOneWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutLab_requestsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutLab_requestsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
