//URL
const SUPABASE_URL = 'https://ejeezbcksxazezxketdy.supabase.co'; 

//KEY
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZWV6YmNrc3hhemV6eGtldGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODk2MjcsImV4cCI6MTk5MDA2NTYyN30.uPokWkEqMtvLPS0Xe9q-myZON-BEU1EAO4iq7-o0cEk';

//insert a row
const { data, error } = await supabase
  .from('Pets')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])

//delete rows
const { data, error } = await supabase
  .from('Pets')
  .delete()
  .eq('some_column', 'someValue')

//update a row
const { data, error } = await supabase
  .from('Pets')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')

//read (all) rows
let { data: Pets, error } = await supabase
  .from('Pets')
  .select('*')
