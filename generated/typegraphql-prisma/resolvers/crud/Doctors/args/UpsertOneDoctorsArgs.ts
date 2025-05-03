import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsCreateInput } from "../../../inputs/DoctorsCreateInput";
import { DoctorsUpdateInput } from "../../../inputs/DoctorsUpdateInput";
import { DoctorsWhereUniqueInput } from "../../../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorsCreateInput, {
    nullable: false
  })
  create!: DoctorsCreateInput;

  @TypeGraphQL.Field(_type => DoctorsUpdateInput, {
    nullable: false
  })
  update!: DoctorsUpdateInput;
}
