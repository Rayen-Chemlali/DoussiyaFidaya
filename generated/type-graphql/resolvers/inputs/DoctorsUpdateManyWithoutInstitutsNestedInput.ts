import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutInstitutsInput } from "../inputs/DoctorsCreateOrConnectWithoutInstitutsInput";
import { DoctorsCreateWithoutInstitutsInput } from "../inputs/DoctorsCreateWithoutInstitutsInput";
import { DoctorsScalarWhereInput } from "../inputs/DoctorsScalarWhereInput";
import { DoctorsUpdateManyWithWhereWithoutInstitutsInput } from "../inputs/DoctorsUpdateManyWithWhereWithoutInstitutsInput";
import { DoctorsUpdateWithWhereUniqueWithoutInstitutsInput } from "../inputs/DoctorsUpdateWithWhereUniqueWithoutInstitutsInput";
import { DoctorsUpsertWithWhereUniqueWithoutInstitutsInput } from "../inputs/DoctorsUpsertWithWhereUniqueWithoutInstitutsInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateManyWithoutInstitutsNestedInput", {})
export class DoctorsUpdateManyWithoutInstitutsNestedInput {
  @TypeGraphQL.Field(_type => [DoctorsCreateWithoutInstitutsInput], {
    nullable: true
  })
  create?: DoctorsCreateWithoutInstitutsInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsCreateOrConnectWithoutInstitutsInput], {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutInstitutsInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpsertWithWhereUniqueWithoutInstitutsInput], {
    nullable: true
  })
  upsert?: DoctorsUpsertWithWhereUniqueWithoutInstitutsInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  set?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  delete?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsWhereUniqueInput], {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpdateWithWhereUniqueWithoutInstitutsInput], {
    nullable: true
  })
  update?: DoctorsUpdateWithWhereUniqueWithoutInstitutsInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsUpdateManyWithWhereWithoutInstitutsInput], {
    nullable: true
  })
  updateMany?: DoctorsUpdateManyWithWhereWithoutInstitutsInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DoctorsScalarWhereInput[] | undefined;
}
