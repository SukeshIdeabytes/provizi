# constants.py

# --- Paragraph Styles ---
TITLE_STYLE = "Title"
NORMAL_STYLE = "Normal1"
TOC_HEADING_STYLE = "TOCHeading"
HEADING_STYLES = {0: "Heading1", 1: "Heading2", 2: "Heading3"}  
TOC_TITLE = "Table of Contents"

# --- Table ---
DEFAULT_TABLE_WIDTH = 9350
DEFAULT_COL_WIDTH = 4675
HEADER_FILL_COLOR = "D9D9D9"
CELL_BORDER_COLOR = "000000"
CELL_BORDER_SIZE = "4"
# constants.py additions
BORDER_SIDES = ("top", "start", "bottom", "end")
BORDER_VAL = "single"
BORDER_SPACE = "0"
CENTER = "center"
FOOTER_INDEX = "11"          
FOOTER_KEY = "Footer"       


# constants.py additions
W_TC = "w:tc"
W_TBL_PR = "w:tblPr"
W_SHD = "w:shd"
W_TBL_W = "w:tblW"
W_JC = "w:jc"
W_TBL_IND = "w:tblInd"
W_TBL_LAYOUT = "w:tblLayout"
W_TBL_CELL_MAR = "w:tblCellMar"
TYPE_DXA = "dxa"
VAL_CLEAR = "clear"
VAL_AUTO = "auto"
VAL_START = "start"
VAL_FIXED = "fixed"
# --- Line spacing ---
LINE_SPACING_NORMAL = "240"
LINE_SPACING_HEADER = "360"
W_FILL = "w:fill"  

# constants.py

TABLE_CELL_MARGINS = SIDE_TOP = "0"
SIDE_START = "108"
SIDE_BOTTOM = "0"
SIDE_END ="108"
SIDE_TOP = "top"
SIDE_START = "start"
SIDE_BOTTOM = "bottom"
SIDE_END = "end"



CONFIG_ROOT_KEY = "1"
DEFAULT_TITLE = "Pro-Vizi Greenshield Execution Guide"

# --- SKIP keys ---
SKIP_KEYS = {
    "1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7",
    "footer", "template_file", "output_file",
}

# --- TOC ---
TOC_INSTR = 'TOC \\o "1-3" \\h \\z \\u'

# --- XML namespaces ---
WORD_NAMESPACE = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
XML_SPACE_ATTR = "{http://www.w3.org/XML/1998/namespace}space"

# --- Cover Table Labels (optional: can also read dynamically) ---
COVER_LABELS = ["Client:", "Project:", "Date:", "Author(s):", "Reviewer(s):", "Version:", "Document No:"]

# Style constants
POST_TABLE_SPACER = ""  # empty string used for spacing after tables

# Config keys
KEY_HEADING = "heading"
KEY_PARAGRAPH = "paragraph"
KEY_EXAMPLE = "example"
KEY_TABLE_ROW = "table_row"

# JSON config keys
TEMPLATE_FILE_KEY = "template_file"
OUTPUT_FILE_KEY = "output_file"

# Default heading depth fallback
DEFAULT_HEADING_DEPTH = 2