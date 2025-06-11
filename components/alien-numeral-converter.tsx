"use client"

import { useState } from "react"

// Import UI components
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export default function Component() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState("")

  const alienToInt = (s: string): number => {
    const values: { [key: string]: number } = {
      A: 1,
      B: 5,
      Z: 10,
      L: 50,
      C: 100,
      D: 500,
      R: 1000,
    }

    let total = 0

    for (let i = 0; i < s.length; i++) {
      const current = values[s[i]]
      const next = i + 1 < s.length ? values[s[i + 1]] : 0

      if (current < next) {
        total -= current
      } else {
        total += current
      }
    }

    return total
  }

  const handleConvert = () => {
    setError("")
    setResult(null)

    if (!input.trim()) {
      setError("Please enter an Alien numeral")
      return
    }

    // Validate input contains only valid symbols
    const validSymbols = /^[ABZLCDR]+$/
    if (!validSymbols.test(input.toUpperCase())) {
      setError("Invalid symbols. Use only: A, B, Z, L, C, D, R")
      return
    }

    try {
      const converted = alienToInt(input.toUpperCase())
      setResult(converted)
    } catch (err) {
      setError("Error converting numeral")
    }
  }

  const examples = [
    { input: "AAA", output: 3, explanation: "A + A + A = 1 + 1 + 1 = 3" },
    { input: "LBAAA", output: 58, explanation: "L + B + A + A + A = 50 + 5 + 1 + 1 + 1 = 58" },
    { input: "RCRZCAB", output: 1994, explanation: "R + (C-R) + (Z-C) + A-B = 1000 + 900 + 90 + 4 = 1994" },
    { input: "AB", output: 4, explanation: "A before B = 5 - 1 = 4" },
    { input: "AZ", output: 9, explanation: "A before Z = 10 - 1 = 9" },
    { input: "ZL", output: 40, explanation: "Z before L = 50 - 10 = 40" },
    { input: "ZC", output: 90, explanation: "Z before C = 100 - 10 = 90" },
    { input: "CR", output: 900, explanation: "C before R = 1000 - 100 = 900" },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Alien Numeral Converter</CardTitle>
          <CardDescription>Convert Alien numerals to integers using the special symbol system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="numeral">Enter Alien Numeral</Label>
            <div className="flex gap-2">
              <Input
                id="numeral"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., RCRZCAB"
                className="uppercase"
              />
              <Button onClick={handleConvert}>Convert</Button>
            </div>
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          {result !== null && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-lg font-semibold">
                {input.toUpperCase()} = {result}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Symbol Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              ["A", 1],
              ["B", 5],
              ["Z", 10],
              ["L", 50],
              ["C", 100],
              ["D", 500],
              ["R", 1000],
            ].map(([symbol, value]) => (
              <div key={symbol} className="p-2 border rounded">
                <div className="font-bold text-lg">{symbol}</div>
                <div className="text-sm text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subtraction Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">A before B or Z → subtract A</Badge>
              <Badge variant="outline">Z before L or C → subtract Z</Badge>
              <Badge variant="outline">C before D or R → subtract C</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {examples.map((example, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">{example.input}</Badge>
                  <span>→</span>
                  <Badge>{example.output}</Badge>
                </div>
                <div className="text-sm text-gray-600">{example.explanation}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
