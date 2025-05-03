import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutRdvsInput } from "../inputs/DoctorsCreateOrConnectWithoutRdvsInput";
import { DoctorsCreateWithoutRdvsInput } from "../inputs/DoctorsCreateWithoutRdvsInput";
import { DoctorsUpdateToOneWithWhereWithoutRdvsInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutRdvsInput";
import { DoctorsUpsertWithoutRdvsInput } from "../inputs/DoctorsUpsertWithoutRdvsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneWithoutRdvsNestedInput", {})
export class DoctorsUpdateOneWithoutRdvsNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutRdvsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutRdvsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutRdvsInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutRdvsInput | undefined;

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

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutRdvsInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutRdvsInput | undefined;
}
