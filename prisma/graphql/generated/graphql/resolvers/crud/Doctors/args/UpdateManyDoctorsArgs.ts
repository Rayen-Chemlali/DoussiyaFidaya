import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsUpdateManyMutationInput } from "../../../inputs/DoctorsUpdateManyMutationInput";
import { DoctorsWhereInput } from "../../../inputs/DoctorsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsUpdateManyMutationInput, {
    nullable: false
  })
  data!: DoctorsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
