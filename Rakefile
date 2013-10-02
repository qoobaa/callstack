require "rake/clean"

task :default => [:evince]

SRC = "presentation.tex"
DIA_SRC  = FileList["*.dia"]
JS_SRC = FileList["**/*.js"]
SVG_IMG  = FileList["**/*.svg"]

CLEAN.include(%w(*.toc *.aux *.log *.lof *.bib *.bbl *.blg *.out *.snm *.vrb *.nav), JS_SRC.ext("tex"), JS_SRC.ext("txt"), DIA_SRC.ext("eps"), DIA_SRC.ext("pdf"))

CLOBBER.include(%w(pdf dvi ps).collect { |e| SRC.ext(e) })

def pdflatex(source)
  sh "pdflatex -interaction=nonstopmode #{source}"
end

rule ".eps" => ".dia" do |t|
  sh "dia -e #{t.name} #{t.source}"
end

rule ".pdf" => ".eps" do |t|
  sh "epstopdf -outfile=#{t.name} #{t.source}"
end

rule ".tex" => ".js" do |t|
  sh "pygmentize -f latex -O linenos=true -o #{t.name} #{t.source}"
end

rule ".txt" => ".js" do |t|
  sh "node #{t.source} &> #{t.name}" rescue nil
end

rule ".pdf" => ".tex" do |t|
  pdflatex(t.source)
end

file SRC.ext("pdf") => [SRC] + JS_SRC.ext("tex") + JS_SRC.ext("txt") + DIA_SRC.ext("pdf")

desc "Compile PDF"
task :pdf => SRC.ext("pdf")

desc "Show compiled PDF in Evince."
task :evince => :pdf do
  sh "evince #{SRC.ext("pdf")}"
end
