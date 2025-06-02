import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutLab_requestsInput } from "../inputs/DoctorsCreateOrConnectWithoutLab_requestsInput";
import { DoctorsCreateWithoutLab_requestsInput } from "../inputs/DoctorsCreateWithoutLab_requestsInput";
import { DoctorsUpdateToOneWithWhereWithoutLab_requestsInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutLab_requestsInput";
import { DoctorsUpsertWithoutLab_requestsInput } from "../inputs/DoctorsUpsertWithoutLab_requestsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneWithoutLab_requestsNestedInput", {})
export class DoctorsUpdateOneWithoutLab_requestsNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutLab_requestsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutLab_requestsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutLab_requestsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutLab_requestsInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutLab_requestsInput | undefined;

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

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutLab_requestsInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutLab_requestsInput | undefined;
}
