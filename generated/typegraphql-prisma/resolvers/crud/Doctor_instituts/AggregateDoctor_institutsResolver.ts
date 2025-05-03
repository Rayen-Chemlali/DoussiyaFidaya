import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDoctor_institutsArgs } from "./args/AggregateDoctor_institutsArgs";
import { Doctor_instituts } from "../../../models/Doctor_instituts";
import { AggregateDoctor_instituts } from "../../outputs/AggregateDoctor_instituts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor_instituts)
export class AggregateDoctor_institutsResolver {
  @TypeGraphQL.Query(_returns => AggregateDoctor_instituts, {
    nullable: false
  })
  async aggregateDoctor_instituts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDoctor_institutsArgs): Promise<AggregateDoctor_instituts> {
    return getPrismaFromContext(ctx).doctor_instituts.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
