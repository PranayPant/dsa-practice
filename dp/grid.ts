/**
 * A robot is at the top-left (0, 0) of an m x n grid. It can only move Down or Right. 
 * How many unique paths are there to the bottom-right?
 */
export function uniqueGridPaths(rows: number, cols: number){
    const dp = Array.from<number>({length: rows}).map(() => new Array<number>(cols).fill(1));
    for(let row = 1; row < rows; row++){
        for(let col = 1; col < cols; col++){
            dp[row][col] = dp[row-1][col] + dp[row][col-1];
        }
    }
    return dp[rows-1][cols-1];
}

/**
 * A robot is at the top-left (0, 0) of an m x n grid. It can only move Down or Right. 
 * How many unique paths are there to the bottom-right?
 */
export function uniqueGridPathsOptimized(rows: number, cols: number){
    const dp = Array.from<number>({length: cols}).fill(1);

    for(let row = 1; row < rows; row++){
        for(let col = 1; col < cols; col++){
            dp[col] = dp[col] + dp[col-1];
        }
    }
    return dp[cols-1];
}