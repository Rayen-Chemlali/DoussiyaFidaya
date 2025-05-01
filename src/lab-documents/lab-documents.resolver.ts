import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabDocumentsService } from './lab-documents.service';
import { LabDocument } from './entities/lab-document.entity';
import { CreateLabDocumentInput } from './dto/create-lab-document.input';
import { UpdateLabDocumentInput } from './dto/update-lab-document.input';

@Resolver(() => LabDocument)
export class LabDocumentsResolver {
  constructor(private readonly labDocumentsService: LabDocumentsService) {}

  @Mutation(() => LabDocument)
  createLabDocument(@Args('createLabDocumentInput') createLabDocumentInput: CreateLabDocumentInput) {
    return this.labDocumentsService.create(createLabDocumentInput);
  }

  @Query(() => [LabDocument], { name: 'labDocuments' })
  findAll() {
    return this.labDocumentsService.findAll();
  }

  @Query(() => LabDocument, { name: 'labDocument' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.labDocumentsService.findOne(id);
  }

  @Mutation(() => LabDocument)
  updateLabDocument(@Args('updateLabDocumentInput') updateLabDocumentInput: UpdateLabDocumentInput) {
    return this.labDocumentsService.update(updateLabDocumentInput.id, updateLabDocumentInput);
  }

  @Mutation(() => LabDocument)
  removeLabDocument(@Args('id', { type: () => Int }) id: number) {
    return this.labDocumentsService.remove(id);
  }
}
