def count_increases(measurements)
  count = 0

  prev_measurement = measurements.first
  measurements.drop(1).each do |measurement|
    count = count + 1 if measurement > prev_measurement
    prev_measurement = measurement
  end

  count
end

def count_increases_cons(measurements)
  # part 1
  measurements
    .each_cons(2)
    .count { |prev, curr| prev < curr }

  # part 2
  measurements
    .each_cons(4)
    .count { |a, b, c, d| (a + b + c) < (b + c + d) }
end

input = File.read("input.txt") # 1393
# input = "9 10" # 1 - fails if not converted to ints
# input = "100 103 101 105 108 108 108 104 105" # 4
# input = "103 101 105 108 108 108 104 105" # 3
# input = "100 103 101 105 108 108 108 104" # 3
# input = "103 101 105 108 108 108 104" # 2
# input = "199 200 208 210 200 207 240 269 260 263" # 7

measurements = input.split.map(&:to_i)
puts count_increases(measurements)
puts count_increases_cons(measurements)
