import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutRdv_requestsInput } from "../inputs/DoctorsCreateOrConnectWithoutRdv_requestsInput";
import { DoctorsCreateWithoutRdv_requestsInput } from "../inputs/DoctorsCreateWithoutRdv_requestsInput";
import { DoctorsUpdateToOneWithWhereWithoutRdv_requestsInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutRdv_requestsInput";
import { DoctorsUpsertWithoutRdv_requestsInput } from "../inputs/DoctorsUpsertWithoutRdv_requestsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneWithoutRdv_requestsNestedInput", {})
export class DoctorsUpdateOneWithoutRdv_requestsNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutRdv_requestsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutRdv_requestsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutRdv_requestsInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutRdv_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  disconnect?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  delete?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutRdv_requestsInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutRdv_requestsInput | undefined;
}
