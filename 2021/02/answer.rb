def move_1((x, y), (direction, distance)) # dimensions, command)
  case direction
  when "forward" then [x + distance, y]
  when "down" then [x, y + distance]
  when "up" then [x, y - distance]
  end
end

def move_2((x, y, aim), (direction, distance)) # dimensions, command)
  case direction
  when "forward" then [x + distance, y + (distance * aim), aim]
  when "down" then [x, y, aim + distance]
  when "up" then [x, y, aim - distance]
  end
end

inputs = File.read("input.txt") # 2086357770
  .split
  .each_slice(2)
  .map { |direction, distance| [direction, distance.to_i] }

# part 1
x1, y1 = inputs
  .reduce([0, 0]) { |acc, input| move_1(acc, input) }

puts x1, y1
puts x1 * y1

# part 2
x2, y2 = inputs
  .reduce([0, 0, 0]) { |acc, input| move_2(acc, input) }

puts x2, y2
puts x2 * y2
