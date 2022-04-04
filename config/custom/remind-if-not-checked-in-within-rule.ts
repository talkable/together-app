import type { Nullable, RemindMemberOfLateCheckInRule } from '../../types';

export const remindIfNotCheckedInWithinRule: Nullable<RemindMemberOfLateCheckInRule> = {
    hours: 72, // Will remind members not checked in within last 48 hours to check in
};
