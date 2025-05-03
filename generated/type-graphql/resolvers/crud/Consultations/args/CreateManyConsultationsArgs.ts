import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsCreateManyInput } from "../../../inputs/ConsultationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyConsultationsArgs {
  @TypeGraphQL.Field(_type => [ConsultationsCreateManyInput], {
    nullable: false
  })
  data!: ConsultationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
