# Auther

Auther is markup language for scenario writing.

## Notes
Some things about screenwriting:
- You're not a director, you're screenwriter, so do not write anything about scenes shooting and etc. if that's not a part of your story. Yes, 'Auther' has some features like 'CAMERA MOVES...', but that's just an ability and doesn't mean you should use it.
- When new character appears, you should put his/her name in UPPERCASE.
- If narrative should be interrupted in one scene and then continued in next - use '...' at end and start

## Syntax specification

### Plain text
Plain text looks like a usual text 

### New scene

#### Syntax:
	[1]
	New scene text



### Script Headings

#### EXT/INT
EXT and INT marks are for Exterior and Interior.

#### Location
---

#### Time
After EXT/INT and Location comes Time. It can be just a NIGHT/DAY or with additional date(and time).

#### Syntax:
	INT. CAR -- DAY -- 1939 -- 1:49 PM
	EXT. ROOF -- NIGHT

### Dialogs(Speech)

#### Syntax:
	NAME>
	Bla-bla-bla
	<
	
	OR

	Plain text. Action. And she said:>
	Bla-bla-bla
	<