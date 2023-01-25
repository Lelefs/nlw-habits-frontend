import { generateDatesFromYearBeginning } from "../utils/generateDatesFromYearBeginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();
const minimunSummaryDatesSize = 112; // 16 semanas ou 4 meses
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex gap-2">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, i) => (
          <div
            key={`${day}-${i}`}
            className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <>
          {summaryDates.map((date) => (
            <HabitDay key={date.toString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <div
                key={`${index}-dsa`}
                className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            ))}
        </>
      </div>
    </div>
  );
}
