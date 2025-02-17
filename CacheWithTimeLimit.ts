type MapType = {
  [key: number]: { value: number; duration: number; timeStamp: number };
};

class TimeLimitedCache {
  private map: MapType;

  constructor() {
    this.map = {};
  }

  set(key: number, value: number, duration: number): boolean {
    const isExistingKey = key in this.map; // Use 'in' operator for clarity
    this.map[key] = {
      value,
      duration: Date.now() + duration, // Store expiration time directly
      timeStamp: Date.now(),
    };
    return isExistingKey; // Return true if it was an existing key
  }

  get(key: number): number {
    const entry = this.map[key]; // Access the entry once

    if (!entry || this.checkExpired(entry)) {
      delete this.map[key]; // Clean up expired entry
      return -1; // Return -1 if the key is expired or does not exist
    }

    return entry.value; // Return the valid value
  }

  private checkExpired(entry: { duration: number; timeStamp: number }): boolean {
    return Date.now() > entry.duration; // Check if the current time exceeds the duration
  }

  count(): number {
    let count = 0;

    for (const key in this.map) {
      if (!this.checkExpired(this.map[key])) {
        count++; // Increment count for each un-expired key
      } else {
        delete this.map[key]; // Clean up expired entries
      }
    }

    return count; // Return the count of un-expired keys
  }
}

// Example usage:
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false (new entry)
console.log(timeLimitedCache.set(1, 45, 1000)); // true (existing entry updated)
console.log(timeLimitedCache.get(1)); // 45 (latest value)
console.log(timeLimitedCache.get(5)); // -1 (non-existing key)
console.log(timeLimitedCache.count()); // 1 (one valid entry)
