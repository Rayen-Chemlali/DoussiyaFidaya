import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutRdv_requestsInput } from "../inputs/DoctorsCreateWithoutRdv_requestsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateOrConnectWithoutRdv_requestsInput", {})
export class DoctorsCreateOrConnectWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutRdv_requestsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutRdv_requestsInput;
}
