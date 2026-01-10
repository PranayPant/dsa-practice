/**
 * Given an array of meeting times, find the maximum
 * number of concurrent meetings happening at any given time.
 * @param times array of [start, end] intervals
 * @returns Number of meetings
 * 
 * Example: [[1,2], [2, 6], [3, 6], [4, 5]]
 * 3
 */
export function maxConcurrentMeetings(times: number[][]){

    if(times.length < 2) return times.length;

    const starts = [], ends = [];
    for(const time of times){
        starts.push(time[0]);
        ends.push(time[1]);
    }

    starts.sort((a,b) => a-b);
    ends.sort((a,b) => a-b);

    let L = 0, R = 0;
    let currMax = 0, globalMax = 0;

    while( L < starts.length){
        if(starts[L] < ends[R]){
            L++;
            currMax++;
            globalMax = Math.max(globalMax, currMax);
        }
        else {
            R++;
            currMax--;
        }
    }

    return globalMax;

} 