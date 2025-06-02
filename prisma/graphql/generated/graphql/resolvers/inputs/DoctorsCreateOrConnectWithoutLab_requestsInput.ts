import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutLab_requestsInput } from "../inputs/DoctorsCreateWithoutLab_requestsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutLab_requestsInput", {})
export class DoctorsCreateOrConnectWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutLab_requestsInput;
}
