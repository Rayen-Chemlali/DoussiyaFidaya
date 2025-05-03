import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutRdvsInput } from "../inputs/ConsultationsCreateOrConnectWithoutRdvsInput";
import { ConsultationsCreateWithoutRdvsInput } from "../inputs/ConsultationsCreateWithoutRdvsInput";
import { ConsultationsUpdateToOneWithWhereWithoutRdvsInput } from "../inputs/ConsultationsUpdateToOneWithWhereWithoutRdvsInput";
import { ConsultationsUpsertWithoutRdvsInput } from "../inputs/ConsultationsUpsertWithoutRdvsInput";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateOneWithoutRdvsNestedInput", {})
export class ConsultationsUpdateOneWithoutRdvsNestedInput {
  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutRdvsInput, {
    nullable: true
  })
  create?: ConsultationsCreateWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateOrConnectWithoutRdvsInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpsertWithoutRdvsInput, {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithoutRdvsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  disconnect?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  delete?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateToOneWithWhereWithoutRdvsInput, {
    nullable: true
  })
  update?: ConsultationsUpdateToOneWithWhereWithoutRdvsInput | undefined;
}
