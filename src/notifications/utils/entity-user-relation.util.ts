import { Injectable } from '@nestjs/common';
// a refaire
@Injectable()
export class EntityUserRelationUtil {
  async isUserRelatedToEntity(userId: string, entity: any): Promise<boolean> {
    if (!entity) return false;

    // Direct relationship checks
    if (entity.patient_id === userId) return true;
    if (entity.doctor_id === userId) return true;
    if (entity.id === userId) return true;
    // if (entity.user?.id === userId) return true;
    // if (entity.users?.some((u: any) => u.id === userId)) return true;
    // if (entity.team?.members?.some((m: any) => m.id === userId)) return true;
    // if (entity.employerId === userId || entity.employeeId === userId) return true;

    // Extend for async DB queries (e.g., organization hierarchy)
    // Example: const isRelated = await this.checkComplexRelation(userId, entity);
    return false;
  }

  async getUsersByRole(role: string): Promise<string[]> {
    // Stub: Query DB for users by role (e.g., SELECT id FROM users WHERE role = :role)
    return [];
  }
}