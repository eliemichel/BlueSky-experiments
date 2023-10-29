import cbor2
import base64
from datetime import date, datetime, timezone
import random

def randomClockId(seed: int | None = None):
	if seed is not None:
		gen = random.Random(seed)
	else:
		gen = random
	return gen.randrange(1024)

def generateTid(dt: datetime, clock_id: int | None = None):
	if clock_id is None:
		clock_id = randomClockId()
	alphabet = "234567abcdefghijklmnopqrstuvwxyz"
	µs = 1000000 * int(dt.timestamp()) + dt.microsecond
	remainer = (µs << 10) + clock_id
	tid = ""
	for i in range(13):
		tid = alphabet[remainer & 0b11111] + tid
		remainer = remainer >> 5
	return tid

def parseTid(tid: str):
	assert(len(tid) == 13)
	alphabet = "234567abcdefghijklmnopqrstuvwxyz"
	inv_alphabet = { char: idx for (idx, char) in enumerate(alphabet) }
	value = 0
	for i, c in enumerate(tid):
		value = (value << 5) + inv_alphabet[c]
	clock_id = value % 0b1111111111
	µs = value >> 10
	return datetime.fromtimestamp(µs / 1000000.0), clock_id

def main():
	data = cbor2.dumps(['hello', 'world'])
	print(data)
	obj = cbor2.loads(b'\x83ehelloeworldcfoo')
	print(obj)

	# Serialize dates as datetimes
	dt = cbor2.dumps(date(2019, 10, 28), timezone=timezone.utc, date_as_datetime=True)
	print(base64.b64encode(dt))

	clock_id = randomClockId()
	dt = datetime(2019, 10, 28, 15, 53, 12, 100, timezone.utc)
	print(generateTid(dt, clock_id))
	dt = datetime(2019, 10, 28, 15, 53, 12, 101, timezone.utc)
	print(generateTid(dt, clock_id))
	print(parseTid("3gpzdznb4n7rt"))

	x = "wHQyMDE5LTEwLTI4VDAwOjAwOjAwWg=="
	print(cbor2.loads(base64.b64decode(x)))

def createCommit():
	tid = generateTid(datetime.now(), clock_id)
	return {
		"did": "",
		"version": 3,
		"data": "svrg4s32t4",
		"rev": tid,
		"prev": None,
		"sig": "",
	}

if __name__ == "__main__":
	main()
