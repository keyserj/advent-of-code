defmodule App do
  def move_1([direction, distance], [x, y]) do
    case direction do
      "forward" -> [x + distance, y]
      "down" -> [x, y + distance]
      "up" -> [x, y - distance]
    end
  end

  def move_2([direction, distance], [x, y, aim]) do
    case direction do
      "forward" -> [x + distance, y + (distance * aim), aim]
      "down" -> [x, y, aim + distance]
      "up" -> [x, y, aim - distance]
    end
  end
end

inputs = File.read!("input.txt")
# inputs = """
# forward 5
# down 5
# forward 8
# up 3
# down 8
# forward 2
# """ # 150 & 900
  |> String.split
  |> Enum.chunk_every(2)
  |> Enum.map(fn [direction, distance] -> [direction, String.to_integer(distance)] end)

# part 1
[x_1, y_1] = inputs
  |> Enum.reduce([0, 0], &App.move_1/2)

IO.puts("#{x_1} #{y_1}")
IO.puts(x_1 * y_1)

# part 2
[x_2, y_2, _] = inputs
  |> Enum.reduce([0, 0, 0], &App.move_2/2)

IO.puts("#{x_2} #{y_2}")
IO.puts(x_2 * y_2)
