export interface IBucketMaps {
    users: Map<string, IBucketMapUsers>;
}

export interface IBucketMapUsers {
    time: number;
    content: number;
}