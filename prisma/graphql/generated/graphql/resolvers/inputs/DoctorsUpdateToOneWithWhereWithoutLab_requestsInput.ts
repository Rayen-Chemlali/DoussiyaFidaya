import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutLab_requestsInput } from "../inputs/DoctorsUpdateWithoutLab_requestsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutLab_requestsInput", {})
export class DoctorsUpdateToOneWithWhereWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutLab_requestsInput;
}
