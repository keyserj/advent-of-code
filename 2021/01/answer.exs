measurements = File.read!("input.txt")
# measurements = "199 200 208 210 200 207 240 269 260 263" # 7 & 5
  |> String.split
  |> Enum.map(&String.to_integer/1)


increases_1 = measurements
  |> Enum.chunk_every(2, 1, :discard) # grouped every 2 measurements, stepping once
  # |> Enum.count(fn x -> List.first(x) < List.last(x) end)
  # |> Enum.count(fn x -> Enum.at(x, 0) < Enum.at(x, 1) end)
  |> Enum.count(fn [x, y] -> x < y end)

IO.puts(increases_1)

# part 2 - comparing 3-measurement windows
increases_2 = measurements
  |> Enum.chunk_every(4, 1, :discard)
  |> Enum.count(fn [a, b, c, d] -> (a + b + c) < (b + c + d) end)

IO.puts(increases_2)
