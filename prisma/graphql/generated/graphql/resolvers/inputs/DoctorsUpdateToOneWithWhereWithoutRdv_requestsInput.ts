import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutRdv_requestsInput } from "../inputs/DoctorsUpdateWithoutRdv_requestsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutRdv_requestsInput", {})
export class DoctorsUpdateToOneWithWhereWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutRdv_requestsInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutRdv_requestsInput;
}
