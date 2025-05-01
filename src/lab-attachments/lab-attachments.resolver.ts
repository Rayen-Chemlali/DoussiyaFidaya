import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabAttachmentsService } from './lab-attachments.service';
import { LabAttachment } from './entities/lab-attachment.entity';
import { CreateLabAttachmentInput } from './dto/create-lab-attachment.input';
import { UpdateLabAttachmentInput } from './dto/update-lab-attachment.input';

@Resolver(() => LabAttachment)
export class LabAttachmentsResolver {
  constructor(private readonly labAttachmentsService: LabAttachmentsService) {}

  @Mutation(() => LabAttachment)
  createLabAttachment(@Args('createLabAttachmentInput') createLabAttachmentInput: CreateLabAttachmentInput) {
    return this.labAttachmentsService.create(createLabAttachmentInput);
  }

  @Query(() => [LabAttachment], { name: 'labAttachments' })
  findAll() {
    return this.labAttachmentsService.findAll();
  }

  @Query(() => LabAttachment, { name: 'labAttachment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.labAttachmentsService.findOne(id);
  }

  @Mutation(() => LabAttachment)
  updateLabAttachment(@Args('updateLabAttachmentInput') updateLabAttachmentInput: UpdateLabAttachmentInput) {
    return this.labAttachmentsService.update(updateLabAttachmentInput.id, updateLabAttachmentInput);
  }

  @Mutation(() => LabAttachment)
  removeLabAttachment(@Args('id', { type: () => Int }) id: number) {
    return this.labAttachmentsService.remove(id);
  }
}
