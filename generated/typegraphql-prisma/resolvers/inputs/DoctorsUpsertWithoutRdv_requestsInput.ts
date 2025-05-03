import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateWithoutRdv_requestsInput } from "../inputs/DoctorsCreateWithoutRdv_requestsInput";
import { DoctorsUpdateWithoutRdv_requestsInput } from "../inputs/DoctorsUpdateWithoutRdv_requestsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpsertWithoutRdv_requestsInput", {})
export class DoctorsUpsertWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutRdv_requestsInput, {
    nullable: false
  })
  update!: DoctorsUpdateWithoutRdv_requestsInput;

  @TypeGraphQL.Field(_type => DoctorsCreateWithoutRdv_requestsInput, {
    nullable: false
  })
  create!: DoctorsCreateWithoutRdv_requestsInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
