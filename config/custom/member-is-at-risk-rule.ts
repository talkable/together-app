import type { Nullable, MemberIsAtRiskRule } from '../../types';
import {isWithinNHours} from "../../helpers/client";
import type { Member } from '../../entities';


export const memberIsAtRiskRule: Nullable<MemberIsAtRiskRule> = (member: Member): boolean => {
    const isSafe = member.checkIn && member.checkIn.isSafe;
    const hasCheckedInRecently = member.checkIn && isWithinNHours(member.checkIn.createdAt, 72);

    return !Boolean(isSafe && hasCheckedInRecently);
};
