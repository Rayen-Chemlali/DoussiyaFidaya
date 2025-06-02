import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutRdv_requestsInput } from "../inputs/DoctorsCreateOrConnectWithoutRdv_requestsInput";
import { DoctorsCreateWithoutRdv_requestsInput } from "../inputs/DoctorsCreateWithoutRdv_requestsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsCreateNestedOneWithoutRdv_requestsInput", {})
export class DoctorsCreateNestedOneWithoutRdv_requestsInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutRdv_requestsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutRdv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;
}
