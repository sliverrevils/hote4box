import { HistoryBalsTable } from "@/components/tables/HistoryBals/HistoryBals";
import { mockPointsData } from "@/shared/constants/historyBalsMock";

export default function HistoryProfile() {
    return (
        <div>
            <HistoryBalsTable data={mockPointsData} />
        </div>
    );
}
