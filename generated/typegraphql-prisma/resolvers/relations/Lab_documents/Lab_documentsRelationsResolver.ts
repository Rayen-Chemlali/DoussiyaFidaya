import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Analysis_results } from "../../../models/Analysis_results";
import { Ctscan_results } from "../../../models/Ctscan_results";
import { Lab_attachments } from "../../../models/Lab_attachments";
import { Lab_documents } from "../../../models/Lab_documents";
import { Lab_requests } from "../../../models/Lab_requests";
import { Lab_results } from "../../../models/Lab_results";
import { Laboratories } from "../../../models/Laboratories";
import { Patients } from "../../../models/Patients";
import { Xray_results } from "../../../models/Xray_results";
import { Lab_documentsAnalysis_resultsArgs } from "./args/Lab_documentsAnalysis_resultsArgs";
import { Lab_documentsCtscan_resultsArgs } from "./args/Lab_documentsCtscan_resultsArgs";
import { Lab_documentsLab_attachmentsArgs } from "./args/Lab_documentsLab_attachmentsArgs";
import { Lab_documentsLab_requestsArgs } from "./args/Lab_documentsLab_requestsArgs";
import { Lab_documentsLab_resultsArgs } from "./args/Lab_documentsLab_resultsArgs";
import { Lab_documentsLaboratoriesArgs } from "./args/Lab_documentsLaboratoriesArgs";
import { Lab_documentsXray_resultsArgs } from "./args/Lab_documentsXray_resultsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lab_documents)
export class Lab_documentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Analysis_results], {
    nullable: false
  })
  async analysis_results(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_documentsAnalysis_resultsArgs): Promise<Analysis_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).analysis_results({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Ctscan_results], {
    nullable: false
  })
  async ctscan_results(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_documentsCtscan_resultsArgs): Promise<Ctscan_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).ctscan_results({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Lab_attachments], {
    nullable: false
  })
  async lab_attachments(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_documentsLab_attachmentsArgs): Promise<Lab_attachments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).lab_attachments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Laboratories, {
    nullable: true
  })
  async laboratories(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_documentsLaboratoriesArgs): Promise<Laboratories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).laboratories({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patients, {
    nullable: false
  })
  async patients(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Patients> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).patients({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Lab_requests, {
    nullable: true
  })
  async lab_requests(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_documentsLab_requestsArgs): Promise<Lab_requests | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).lab_requests({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Lab_results], {
    nullable: false
  })
  async lab_results(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_documentsLab_resultsArgs): Promise<Lab_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).lab_results({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Xray_results], {
    nullable: false
  })
  async xray_results(@TypeGraphQL.Root() lab_documents: Lab_documents, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: Lab_documentsXray_resultsArgs): Promise<Xray_results[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lab_documents.findUniqueOrThrow({
      where: {
        id: lab_documents.id,
      },
    }).xray_results({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
