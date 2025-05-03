import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxCreateManyInput } from "../../../inputs/Instituts_medicauxCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInstituts_medicauxArgs {
  @TypeGraphQL.Field(_type => [Instituts_medicauxCreateManyInput], {
    nullable: false
  })
  data!: Instituts_medicauxCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
