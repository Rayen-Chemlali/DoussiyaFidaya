import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CliniquesCreateManyInput } from "../../../inputs/CliniquesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCliniquesArgs {
  @TypeGraphQL.Field(_type => [CliniquesCreateManyInput], {
    nullable: false
  })
  data!: CliniquesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
